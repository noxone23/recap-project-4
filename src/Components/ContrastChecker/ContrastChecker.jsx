import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ContrastChecker({ hex, contrastText }) {
  const { data, isLoading, error } = useSWR(
    `https://webaim.org/resources/contrastchecker/?fcolor=${contrastText.replace("#", "")}&bcolor=${hex.replace("#", "")}&api`,
    fetcher,
  );

if (isLoading) { 
    return <p>Checking contrast...</p>;
}

if (error) { 
    return <p>Error checking contrast...</p>;
}

function getScoreText() {
    if (data?.AA === "pass") {
        return "Yup";
    }
    if (data?.AALarge === "pass") {
        return "Kinda";
    }
    return "Nope";
}
const score = getScoreText();

if (score === "Yup") {
    return <p className="contrast-score contrast-score-Yup">Overall Contrast Score: Yup</p>;
}

if (score === "Kinda") {
    return <p className="contrast-score contrast-score-Kinda">Overall Contrast Score: Kinda</p>;
}

return <p className="contrast-score contrast-score-Nope">Overall Contrast Score: Nope</p>;
}