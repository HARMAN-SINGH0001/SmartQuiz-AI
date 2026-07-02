import { aiGeneratedQuestions, attempts, questionBank, quizzes } from '../data/mockData'
import type { AiGenerationRequest, Question, Quiz } from '../types'

const wait = async <T,>(value: T, delay = 350): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(value), delay))

export const quizApi = {
  listQuizzes: async () => wait(quizzes),
  getQuiz: async (quizId: string) => wait(quizzes.find((quiz) => quiz.id === quizId)),
  listQuestionBank: async () => wait(questionBank),
  listAttempts: async () => wait(attempts),
  submitQuiz: async (payload: { quizId: string; answers: Record<string, string | string[]> }) =>
    wait({ id: `attempt-${Date.now()}`, ...payload }, 500),
  saveQuiz: async (payload: Quiz) => wait({ ...payload, id: payload.id || `quiz-${Date.now()}` }),
  generateAiQuiz: async (request: AiGenerationRequest) =>
    wait(
      {
        request,
        questions: aiGeneratedQuestions.map((question, index) => ({
          ...question,
          id: `ai-${index + 1}-${Date.now()}`,
        })) as Question[],
      },
      800,
    ),
}