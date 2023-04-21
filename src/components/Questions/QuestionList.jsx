import { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import api from "../../api/api";
import SearchForm from "./SearchForm";

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const [page, setPage] = useState(0);
  const [loadingMore, setLoadingMore] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const [searchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get("filter") || "");

  const fetchQuestions = useCallback(async () => {
    const newQuestions = await api.getQuestions(10, page * 10, searchValue);
    console.log(searchValue);
    setQuestions((prevQuestions) => [...prevQuestions, ...newQuestions]);
    setLoadingMore(false);
  }, [page, searchValue]);

  useEffect(() => {
    setSearchValue(searchParams.get("filter") || "");
  }, [location.search, searchParams]);

  useEffect(() => {
    if (page > 0 || searchValue !== "") {
      setQuestions([]);
      fetchQuestions();
    }
  }, [page, searchValue, fetchQuestions]);



  // useEffect(() => {
  //   // const searchParams = new URLSearchParams(location.search);
  //   // const filterParam = searchParams.get("filter") || "";
  //   // setSearchValue(filterParam);
  //   setQuestions([])
  //   fetchQuestions();

  // }, [location, fetchQuestions]);

  const loadMore = () => {
    setLoadingMore(true);
    setPage((prevPage) => prevPage + 1)
  };

  const viewQuestionDetail = (questionId) => {
    navigate({
      pathname: "/question",
      id: `/${questionId}`
    });
  };

  // const handleQuestionClick = (questionId) => {
  //   viewQuestionDetail(questionId)
  // }; See if it works after trying the inline function

  return (
    <div>
      <h1>Question List</h1>

      <SearchForm initialValue={searchValue} />

      <ul>
        {questions.map((question, index) => (
          <li
            key={question.id}
            onClick={() => viewQuestionDetail(question.id)}
          >
            {index + 1} {question.question}
          </li>
        ))}
      </ul>
      {loadingMore ? (
        <p>Loading more questions...</p>
      ) : (
        <button onClick={loadMore}>Load more</button>
      )}
    </div>
  );
};

export default QuestionList;


/* <form onSubmit={handleSearchSubmit}>
  <input
    type="text"
    value={inputValue}
    onChange={handleSearchChange}
    placeholder="Search"
  />
  <button type="submit">Search</button>
</form> */
