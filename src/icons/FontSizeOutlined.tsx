// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FontSizeOutlinedSvg from '@ant-design/icons-svg/lib/asn/FontSizeOutlined';

export interface FontSizeOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FontSizeOutlined: FontSizeOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FontSizeOutlinedSvg} />
    ;

FontSizeOutlined.displayName = 'FontSizeOutlined';

export default FunctionalComponent;