import classes from './ChartBar.module.scss';

type Props = {
  value: number,
  maxValue: number,
  label: string,
};

function ChartBar({
  value,
  maxValue,
  label,
}: Props) {
  let cssFillHeight = '0%';
  let fillPercentage;

  if (maxValue > 0) {
    fillPercentage = Math.round((value / maxValue) * 100);
    cssFillHeight = `${fillPercentage}%`;
  }

  return (
    <div className={classes['chart-bar']}>
      <div className={classes['chart-bar__inner']}>
        <div
          className={classes['chart-bar__fill']}
          style={{ height: cssFillHeight }}
        />
      </div>
      <div className={classes['chart-bar__label']}>
        { label }
      </div>
    </div>
  );
}

export default ChartBar;
