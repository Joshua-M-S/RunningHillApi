"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordsController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let WordsController = class WordsController {
    constructor(wordsRepository) {
        this.wordsRepository = wordsRepository;
    }
    async create(words) {
        return this.wordsRepository.create(words);
    }
    async count(where) {
        return this.wordsRepository.count(where);
    }
    async find(filter) {
        return this.wordsRepository.find(filter);
    }
    async updateAll(words, where) {
        return this.wordsRepository.updateAll(words, where);
    }
    async findById(id, filter) {
        return this.wordsRepository.findById(id, filter);
    }
    async updateById(id, words) {
        await this.wordsRepository.updateById(id, words);
    }
    async replaceById(id, words) {
        await this.wordsRepository.replaceById(id, words);
    }
    async deleteById(id) {
        await this.wordsRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/words'),
    (0, rest_1.response)(200, {
        description: 'Words model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Words) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Words, {
                    title: 'NewWords',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WordsController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/words/count'),
    (0, rest_1.response)(200, {
        description: 'Words model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Words)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WordsController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/words'),
    (0, rest_1.response)(200, {
        description: 'Array of Words model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Words, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Words)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WordsController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/words'),
    (0, rest_1.response)(200, {
        description: 'Words PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Words, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Words)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Words, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WordsController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/words/{id}'),
    (0, rest_1.response)(200, {
        description: 'Words model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Words, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Words, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WordsController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/words/{id}'),
    (0, rest_1.response)(204, {
        description: 'Words PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Words, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Words]),
    tslib_1.__metadata("design:returntype", Promise)
], WordsController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/words/{id}'),
    (0, rest_1.response)(204, {
        description: 'Words PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Words]),
    tslib_1.__metadata("design:returntype", Promise)
], WordsController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/words/{id}'),
    (0, rest_1.response)(204, {
        description: 'Words DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], WordsController.prototype, "deleteById", null);
WordsController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.WordsRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.WordsRepository])
], WordsController);
exports.WordsController = WordsController;
//# sourceMappingURL=words.controller.js.map