"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitHubClient = exports.HttpException = void 0;
var tslib_1 = require("tslib");
var HttpException = /** @class */ (function (_super) {
    tslib_1.__extends(HttpException, _super);
    function HttpException(_a) {
        var message = _a.message, status = _a.status, statusText = _a.statusText, url = _a.url;
        var _this = _super.call(this, message) || this;
        _this.url = url;
        _this.status = status;
        _this.statusText = statusText;
        return _this;
    }
    return HttpException;
}(Error));
exports.HttpException = HttpException;
var GitHubClient = /** @class */ (function () {
    function GitHubClient(_a) {
        var base = _a.base, token = _a.token, fetch = _a.fetch;
        this.token = '';
        this.base = base;
        this.fetch = fetch;
        this.credentials = token ? "token " + token : null;
        this.headers = {
            'Content-Type': 'application/json',
            Accept: 'application/vnd.github.v3.full+json'
        };
        if (this.credentials) {
            this.headers.Authorization = this.credentials;
        }
        return this;
    }
    GitHubClient.prototype.get = function (_a) {
        var path = _a.path;
        return this.call({ method: 'GET', path: path, data: null });
    };
    GitHubClient.prototype.delete = function (_a) {
        var path = _a.path;
        return this.call({ method: 'DELETE', path: path, data: null });
    };
    GitHubClient.prototype.post = function (_a) {
        var path = _a.path, data = _a.data;
        return this.call({ method: 'POST', path: path, data: data });
    };
    GitHubClient.prototype.put = function (_a) {
        var path = _a.path, data = _a.data;
        return this.call({ method: 'PUT', path: path, data: data });
    };
    GitHubClient.prototype.patch = function (_a) {
        var path = _a.path, data = _a.data;
        return this.call({ method: 'PATCH', path: path, data: data });
    };
    GitHubClient.prototype.call = function (_a) {
        var method = _a.method, path = _a.path, data = _a.data;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.fetch(this.base + path, {
                            method: method,
                            headers: this.headers,
                            body: data !== null ? JSON.stringify(data) : null
                        })];
                    case 1:
                        response = _b.sent();
                        if (response.ok) {
                            return [2 /*return*/, response.json()];
                        }
                        else {
                            throw new HttpException({
                                message: "HttpException[" + method + "]",
                                status: response.status,
                                statusText: response.statusText,
                                url: response.url
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return GitHubClient;
}());
exports.GitHubClient = GitHubClient;
exports.default = GitHubClient;
//# sourceMappingURL=index.js.map