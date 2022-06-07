// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import BehanceCircleFilledSvg from '@ant-design/icons-svg/lib/asn/BehanceCircleFilled';

export interface BehanceCircleFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const BehanceCircleFilled: BehanceCircleFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={BehanceCircleFilledSvg} />
    ;

BehanceCircleFilled.displayName = 'BehanceCircleFilled';

export default FunctionalComponent;