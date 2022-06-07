// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import VerticalRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/VerticalRightOutlined';

export interface VerticalRightOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const VerticalRightOutlined: VerticalRightOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={VerticalRightOutlinedSvg} />
    ;

VerticalRightOutlined.displayName = 'VerticalRightOutlined';

export default FunctionalComponent;