export interface IndexedList<T> {
	[x: string]: T;
}

export interface IGithubClient {
	readonly base: string;
	readonly token: string;
	readonly fetch: (url: string, options?: IndexedList<any>) => Promise<any>;
}

export interface IGithubClientOptions {
	readonly path: string;
	readonly method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
	readonly data: any;
}

export class GitHubClient {
	public token: string = '';
	public fetch: any;

	private base: string;
	private credentials: string | null;
	private headers: IndexedList<string>;

	constructor({ base, token, fetch }: IGithubClient) {
		this.base = base;
		this.fetch = fetch;
		this.credentials = token ? `token ${token}` : null;
		this.headers = {
			'Content-Type': 'application/json',
			Accept: 'application/vnd.github.v3.full+json'
		};

		if (this.credentials) {
			this.headers.Authorization = this.credentials;
		}

		return this;
	}

	public get({ path }: IGithubClientOptions): Promise<any> {
		return this.call({ method: 'GET', path, data: null });
	}

	public delete({ path }: IGithubClientOptions): Promise<any> {
		return this.call({ method: 'DELETE', path, data: null });
	}

	public post({ path, data }: IGithubClientOptions): Promise<any> {
		return this.call({ method: 'POST', path, data });
	}

	public put({ path, data }: IGithubClientOptions): Promise<any> {
		return this.call({ method: 'PUT', path, data });
	}

	public patch({ path, data }: IGithubClientOptions): Promise<any> {
		return this.call({ method: 'PATCH', path, data });
	}

	private async call({ method, path, data }: IGithubClientOptions): Promise<any> {
		const response = await this.fetch(this.base + path, {
			method,
			headers: this.headers,
			body: data !== null ? JSON.stringify(data) : null
		});

		if (response.ok) {
			return response.json();
		} else {
			return {
				status: response.status,
				statusText: response.statusText,
				url: response.url
			};
		}
	}
}

export default GitHubClient;
