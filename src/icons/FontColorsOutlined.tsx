// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FontColorsOutlinedSvg from '@ant-design/icons-svg/lib/asn/FontColorsOutlined';

export interface FontColorsOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FontColorsOutlined: FontColorsOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FontColorsOutlinedSvg} />
    ;

FontColorsOutlined.displayName = 'FontColorsOutlined';

export default FunctionalComponent;