"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordTypes = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const words_model_1 = require("./words.model");
let WordTypes = class WordTypes extends repository_1.Entity {
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
], WordTypes.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], WordTypes.prototype, "Types", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => words_model_1.Words),
    tslib_1.__metadata("design:type", Array)
], WordTypes.prototype, "words", void 0);
WordTypes = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], WordTypes);
exports.WordTypes = WordTypes;
//# sourceMappingURL=word-types.model.js.map