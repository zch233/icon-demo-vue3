// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CameraOutlinedSvg from '@ant-design/icons-svg/lib/asn/CameraOutlined';

export interface CameraOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CameraOutlined: CameraOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CameraOutlinedSvg} />
    ;

CameraOutlined.displayName = 'CameraOutlined';

export default FunctionalComponent;