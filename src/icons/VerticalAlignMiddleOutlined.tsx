// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import VerticalAlignMiddleOutlinedSvg from '@ant-design/icons-svg/lib/asn/VerticalAlignMiddleOutlined';

export interface VerticalAlignMiddleOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const VerticalAlignMiddleOutlined: VerticalAlignMiddleOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={VerticalAlignMiddleOutlinedSvg} />
    ;

VerticalAlignMiddleOutlined.displayName = 'VerticalAlignMiddleOutlined';

export default FunctionalComponent;