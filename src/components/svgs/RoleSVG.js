import PropTypes from 'prop-types';
import * as Config from '../../config';
import * as Utils from '../../Utils';

function RoleSVG(props) {
  const roleData = Utils.getRoleDataByName(props.role);

  return (
    <svg viewBox="0 0 100 100" class="role-svg">
      {roleData.imageSVG}
    </svg>
  );
}


RoleSVG.propTypes = {
  role: PropTypes.string
};

export default RoleSVG;
