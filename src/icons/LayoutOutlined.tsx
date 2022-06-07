// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import LayoutOutlinedSvg from '@ant-design/icons-svg/lib/asn/LayoutOutlined';

export interface LayoutOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const LayoutOutlined: LayoutOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={LayoutOutlinedSvg} />
    ;

LayoutOutlined.displayName = 'LayoutOutlined';

export default FunctionalComponent;