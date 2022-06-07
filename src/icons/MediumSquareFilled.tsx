// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import MediumSquareFilledSvg from '@ant-design/icons-svg/lib/asn/MediumSquareFilled';

export interface MediumSquareFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const MediumSquareFilled: MediumSquareFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={MediumSquareFilledSvg} />
    ;

MediumSquareFilled.displayName = 'MediumSquareFilled';

export default FunctionalComponent;