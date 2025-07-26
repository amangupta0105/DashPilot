import TashColumn from "../TaskColumn/TashColumn";

const DashBoardBody = () => {
  return (
    <div className="flex justify-around mt-4">
      <TashColumn title={"IN PROGRESS"} />
      <TashColumn title={"IN REVIEW"} />
      <TashColumn
        title={"DONE"}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-check-icon lucide-check"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        }
      />
    </div>
  );
};

export default DashBoardBody;
