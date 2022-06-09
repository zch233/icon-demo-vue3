// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RedEnvelopeOutlinedSvg from '@ant-design/icons-svg/es/asn/RedEnvelopeOutlined';

export interface RedEnvelopeOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconRedEnvelopeOutlined: RedEnvelopeOutlinedIconType = (props, context) => (
    <Icon name='RedEnvelopeOutlined' {...{ ...props, ...context.attrs }} icon={RedEnvelopeOutlinedSvg} />
);

IconRedEnvelopeOutlined.displayName = 'IconRedEnvelopeOutlined';

export default IconRedEnvelopeOutlined;