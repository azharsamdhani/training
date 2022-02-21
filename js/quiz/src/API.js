

const shuffleArray = (array) => [...array].sort(()=>Math.random()-0.5);

export const fetchQuiz = async (number,difficulty,key) => {
    const x = key
    // 20-Math.floor(Math.random() * 10);
    console.log("x",x)
    const quiz_url = `https://opentdb.com/api.php?amount=10&category=${x}&difficulty=easy&type=multiple`;
    const data = await (await fetch(quiz_url)).json();
    return data.results.map((question)=>(
        {...question, options:shuffleArray([...question.incorrect_answers, question.correct_answer])}
    ));
}