// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import RightCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/RightCircleOutlined';

export interface RightCircleOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const RightCircleOutlined: RightCircleOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={RightCircleOutlinedSvg} />
    ;

RightCircleOutlined.displayName = 'RightCircleOutlined';

export default FunctionalComponent;