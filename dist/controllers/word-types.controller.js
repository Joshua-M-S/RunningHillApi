"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordTypesController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let WordTypesController = class WordTypesController {
    constructor(wordTypesRepository) {
        this.wordTypesRepository = wordTypesRepository;
    }
    async create(wordTypes) {
        return this.wordTypesRepository.create(wordTypes);
    }
    async count(where) {
        return this.wordTypesRepository.count(where);
    }
    async find(filter) {
        return this.wordTypesRepository.find(filter);
    }
    async updateAll(wordTypes, where) {
        return this.wordTypesRepository.updateAll(wordTypes, where);
    }
    async findById(id, filter) {
        return this.wordTypesRepository.findById(id, filter);
    }
    async updateById(id, wordTypes) {
        await this.wordTypesRepository.updateById(id, wordTypes);
    }
    async replaceById(id, wordTypes) {
        await this.wordTypesRepository.replaceById(id, wordTypes);
    }
    async deleteById(id) {
        await this.wordTypesRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/word-types'),
    (0, rest_1.response)(200, {
        description: 'WordTypes model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.WordTypes) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.WordTypes, {
                    title: 'NewWordTypes',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.WordTypes]),
    tslib_1.__metadata("design:returntype", Promise)
], WordTypesController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/word-types/count'),
    (0, rest_1.response)(200, {
        description: 'WordTypes model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.WordTypes)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WordTypesController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/word-types'),
    (0, rest_1.response)(200, {
        description: 'Array of WordTypes model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.WordTypes, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.WordTypes)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WordTypesController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/word-types'),
    (0, rest_1.response)(200, {
        description: 'WordTypes PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.WordTypes, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.WordTypes)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.WordTypes, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WordTypesController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/word-types/{id}'),
    (0, rest_1.response)(200, {
        description: 'WordTypes model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.WordTypes, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.WordTypes, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WordTypesController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/word-types/{id}'),
    (0, rest_1.response)(204, {
        description: 'WordTypes PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.WordTypes, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.WordTypes]),
    tslib_1.__metadata("design:returntype", Promise)
], WordTypesController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/word-types/{id}'),
    (0, rest_1.response)(204, {
        description: 'WordTypes PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.WordTypes]),
    tslib_1.__metadata("design:returntype", Promise)
], WordTypesController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/word-types/{id}'),
    (0, rest_1.response)(204, {
        description: 'WordTypes DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], WordTypesController.prototype, "deleteById", null);
WordTypesController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.WordTypesRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.WordTypesRepository])
], WordTypesController);
exports.WordTypesController = WordTypesController;
//# sourceMappingURL=word-types.controller.js.map