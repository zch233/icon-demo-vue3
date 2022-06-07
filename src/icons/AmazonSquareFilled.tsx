// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import AmazonSquareFilledSvg from '@ant-design/icons-svg/lib/asn/AmazonSquareFilled';

export interface AmazonSquareFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const AmazonSquareFilled: AmazonSquareFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={AmazonSquareFilledSvg} />
    ;

AmazonSquareFilled.displayName = 'AmazonSquareFilled';

export default FunctionalComponent;