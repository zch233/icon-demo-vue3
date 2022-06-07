// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import RedEnvelopeOutlinedSvg from '@ant-design/icons-svg/lib/asn/RedEnvelopeOutlined';

export interface RedEnvelopeOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const RedEnvelopeOutlined: RedEnvelopeOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={RedEnvelopeOutlinedSvg} />
    ;

RedEnvelopeOutlined.displayName = 'RedEnvelopeOutlined';

export default FunctionalComponent;