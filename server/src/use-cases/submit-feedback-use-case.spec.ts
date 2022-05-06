import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const submitFeedback = new SubmitFeedbackUseCase(
    { create: async () => {} },
    { sendMail: async () => {} },
)

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
         await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,1s23d1as23da123d1as',
        })).resolves.not.toThrow();
    });

    it('should not be able to submit feedback without type', async () => {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,1s23d1as23da123d1as',
        })).rejects.toThrow();
    });

    it('should not be able to submit feedback without comment', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,1s23d1as23da123d1as',
        })).rejects.toThrow();
    });

    it('should not be able to submit feedback with an invalid screenshot ', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'ta tudo bugado',
            screenshot: 'teste.jpg',
        })).rejects.toThrow();
    });
});