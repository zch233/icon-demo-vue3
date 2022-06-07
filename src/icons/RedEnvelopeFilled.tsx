// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import RedEnvelopeFilledSvg from '@ant-design/icons-svg/lib/asn/RedEnvelopeFilled';

export interface RedEnvelopeFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const RedEnvelopeFilled: RedEnvelopeFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={RedEnvelopeFilledSvg} />
    ;

RedEnvelopeFilled.displayName = 'RedEnvelopeFilled';

export default FunctionalComponent;