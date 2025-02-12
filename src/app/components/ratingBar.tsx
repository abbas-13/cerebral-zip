interface RatingBarProps {
  data: { negative: number; positive: number; neutral: number } | null;
}

const RatingBar = ({ data }: RatingBarProps) => {
  if (!data) return null;

  const total = data.negative + data.neutral + data.positive;

  const negativeWidth = (data.negative / total) * 100;
  const neutralWidth = (data.neutral / total) * 100;
  const positiveWidth = (data.positive / total) * 100;
  return (
    <div className="flex gap-1">
      <div
        className="bg-[rgb(240,162,160)] h-2 rounded"
        style={{ width: `${negativeWidth}%` }}
      ></div>

      <div
        className="bg-[rgb(245,201,135)] h-2 rounded"
        style={{ width: `${neutralWidth}%` }}
      ></div>
      <div
        className="bg-[rgb(154,231,174)] h-2 rounded"
        style={{ width: `${positiveWidth}%` }}
      ></div>
    </div>
  );
};

export default RatingBar;
