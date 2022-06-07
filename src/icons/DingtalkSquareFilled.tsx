// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import DingtalkSquareFilledSvg from '@ant-design/icons-svg/lib/asn/DingtalkSquareFilled';

export interface DingtalkSquareFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const DingtalkSquareFilled: DingtalkSquareFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={DingtalkSquareFilledSvg} />
    ;

DingtalkSquareFilled.displayName = 'DingtalkSquareFilled';

export default FunctionalComponent;