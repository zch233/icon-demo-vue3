// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import SketchSquareFilledSvg from '@ant-design/icons-svg/lib/asn/SketchSquareFilled';

export interface SketchSquareFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const SketchSquareFilled: SketchSquareFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={SketchSquareFilledSvg} />
    ;

SketchSquareFilled.displayName = 'SketchSquareFilled';

export default FunctionalComponent;