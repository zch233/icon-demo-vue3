// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import AlipayCircleFilledSvg from '@ant-design/icons-svg/lib/asn/AlipayCircleFilled';

export interface AlipayCircleFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const AlipayCircleFilled: AlipayCircleFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={AlipayCircleFilledSvg} />
    ;

AlipayCircleFilled.displayName = 'AlipayCircleFilled';

export default FunctionalComponent;