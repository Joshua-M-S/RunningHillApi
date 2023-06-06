"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Words = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Words = class Words extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: false,
    }),
    tslib_1.__metadata("design:type", String)
], Words.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: false,
        generated: false,
    }),
    tslib_1.__metadata("design:type", String)
], Words.prototype, "Word", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Words.prototype, "wordTypesId", void 0);
Words = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Words);
exports.Words = Words;
//# sourceMappingURL=words.model.js.map