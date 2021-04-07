import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

const Convert = ({ language, text }) => {
  const [translatedText, setTranslatedText] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedText(text);
    }, 500);
    return () => clearTimeout(timer);
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: API_KEY,
          },
        }
      );
      setTranslatedText(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [debouncedText, language]);

  return <p>{translatedText}</p>;
};

export default Convert;
