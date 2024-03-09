type StarPropsType = {
  selected: boolean;
};
type RatingPropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5;
};
export function Rating({ value }: RatingPropsType) {
  return (
    <div>
      <Star selected={value > 0} />
      <Star selected={value > 1} />
      <Star selected={value > 2} />
      <Star selected={value > 3} />
      <Star selected={value > 4} />
    </div>
  );
}

function Star({ selected }: StarPropsType) {
  console.log("Star rendering");
  if (selected === true) {
    return (
      <span>
        <b>Star</b>
      </span>
    );
  } else {
    return <span>star</span>;
  }
}
