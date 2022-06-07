// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CiOutlinedSvg from '@ant-design/icons-svg/lib/asn/CiOutlined';

export interface CiOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CiOutlined: CiOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CiOutlinedSvg} />
    ;

CiOutlined.displayName = 'CiOutlined';

export default FunctionalComponent;