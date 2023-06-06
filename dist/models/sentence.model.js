"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sentence = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Sentence = class Sentence extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: false,
        generated: false,
    }),
    tslib_1.__metadata("design:type", String)
], Sentence.prototype, "Sentence", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Sentence.prototype, "SentenceId", void 0);
Sentence = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Sentence);
exports.Sentence = Sentence;
//# sourceMappingURL=sentence.model.js.map