import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';

const ExpandButton = ({
  areAllRowsExpanded,
  buttonClass,
  expandableRowsHeader,
  expandedRows,
  iconClass,
  iconIndeterminateClass,
  isHeaderCell,
  onExpand,
}) => {
  return (
    <>
      {isHeaderCell && !areAllRowsExpanded() && areAllRowsExpanded && expandedRows.data.length > 0 ? (
        <IconButton
          onClick={onExpand}
          style={{ padding: 0 }}
          disabled={expandableRowsHeader === false}
          className={buttonClass}
          size="large">
          <RemoveIcon id="expandable-button" className={iconIndeterminateClass} />
        </IconButton>
      ) : (
        <IconButton
          onClick={onExpand}
          style={{ padding: 0 }}
          disabled={expandableRowsHeader === false}
          className={buttonClass}
          size="large">
          <KeyboardArrowRightIcon id="expandable-button" className={iconClass} />
        </IconButton>
      )}
    </>
  );
};

export default ExpandButton;
