"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SentenceController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SentenceController = class SentenceController {
    constructor(sentenceRepository) {
        this.sentenceRepository = sentenceRepository;
    }
    async create(sentence) {
        return this.sentenceRepository.create(sentence);
    }
    async count(where) {
        return this.sentenceRepository.count(where);
    }
    async find(filter) {
        return this.sentenceRepository.find(filter);
    }
    async updateAll(sentence, where) {
        return this.sentenceRepository.updateAll(sentence, where);
    }
    async findById(id, filter) {
        return this.sentenceRepository.findById(id, filter);
    }
    async updateById(id, sentence) {
        await this.sentenceRepository.updateById(id, sentence);
    }
    async replaceById(id, sentence) {
        await this.sentenceRepository.replaceById(id, sentence);
    }
    async deleteById(id) {
        await this.sentenceRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/sentences'),
    (0, rest_1.response)(200, {
        description: 'Sentence model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Sentence) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Sentence, {
                    title: 'NewSentence',
                    exclude: ['SentenceId'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SentenceController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/sentences/count'),
    (0, rest_1.response)(200, {
        description: 'Sentence model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Sentence)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SentenceController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/sentences'),
    (0, rest_1.response)(200, {
        description: 'Array of Sentence model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Sentence, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Sentence)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SentenceController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/sentences'),
    (0, rest_1.response)(200, {
        description: 'Sentence PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Sentence, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Sentence)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Sentence, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SentenceController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/sentences/{id}'),
    (0, rest_1.response)(200, {
        description: 'Sentence model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Sentence, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Sentence, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SentenceController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/sentences/{id}'),
    (0, rest_1.response)(204, {
        description: 'Sentence PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Sentence, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Sentence]),
    tslib_1.__metadata("design:returntype", Promise)
], SentenceController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/sentences/{id}'),
    (0, rest_1.response)(204, {
        description: 'Sentence PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Sentence]),
    tslib_1.__metadata("design:returntype", Promise)
], SentenceController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/sentences/{id}'),
    (0, rest_1.response)(204, {
        description: 'Sentence DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], SentenceController.prototype, "deleteById", null);
SentenceController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.SentenceRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SentenceRepository])
], SentenceController);
exports.SentenceController = SentenceController;
//# sourceMappingURL=sentence.controller.js.map