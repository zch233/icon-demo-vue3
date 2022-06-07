// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import PauseCircleFilledSvg from '@ant-design/icons-svg/lib/asn/PauseCircleFilled';

export interface PauseCircleFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const PauseCircleFilled: PauseCircleFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={PauseCircleFilledSvg} />
    ;

PauseCircleFilled.displayName = 'PauseCircleFilled';

export default FunctionalComponent;