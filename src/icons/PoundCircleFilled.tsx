// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import PoundCircleFilledSvg from '@ant-design/icons-svg/lib/asn/PoundCircleFilled';

export interface PoundCircleFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const PoundCircleFilled: PoundCircleFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={PoundCircleFilledSvg} />
    ;

PoundCircleFilled.displayName = 'PoundCircleFilled';

export default FunctionalComponent;