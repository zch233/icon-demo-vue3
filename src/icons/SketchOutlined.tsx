// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import SketchOutlinedSvg from '@ant-design/icons-svg/lib/asn/SketchOutlined';

export interface SketchOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const SketchOutlined: SketchOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={SketchOutlinedSvg} />
    ;

SketchOutlined.displayName = 'SketchOutlined';

export default FunctionalComponent;