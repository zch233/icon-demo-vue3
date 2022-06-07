// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CiCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CiCircleFilled';

export interface CiCircleFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CiCircleFilled: CiCircleFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CiCircleFilledSvg} />
    ;

CiCircleFilled.displayName = 'CiCircleFilled';

export default FunctionalComponent;