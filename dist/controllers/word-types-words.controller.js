"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordTypesWordsController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let WordTypesWordsController = class WordTypesWordsController {
    constructor(wordTypesRepository) {
        this.wordTypesRepository = wordTypesRepository;
    }
    async find(id, filter) {
        return this.wordTypesRepository.words(id).find(filter);
    }
    async create(id, words) {
        return this.wordTypesRepository.words(id).create(words);
    }
    async patch(id, words, where) {
        return this.wordTypesRepository.words(id).patch(words, where);
    }
    async delete(id, where) {
        return this.wordTypesRepository.words(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/word-types/{id}/words', {
        responses: {
            '200': {
                description: 'Array of WordTypes has many Words',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Words) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WordTypesWordsController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/word-types/{id}/words', {
        responses: {
            '200': {
                description: 'WordTypes model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Words) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Words, {
                    title: 'NewWordsInWordTypes',
                    exclude: ['Word'],
                    optional: ['wordTypesId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WordTypesWordsController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/word-types/{id}/words', {
        responses: {
            '200': {
                description: 'WordTypes.Words PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Words, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Words))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WordTypesWordsController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/word-types/{id}/words', {
        responses: {
            '200': {
                description: 'WordTypes.Words DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Words))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WordTypesWordsController.prototype, "delete", null);
WordTypesWordsController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.WordTypesRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.WordTypesRepository])
], WordTypesWordsController);
exports.WordTypesWordsController = WordTypesWordsController;
//# sourceMappingURL=word-types-words.controller.js.map