// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ForwardFilledSvg from '@ant-design/icons-svg/lib/asn/ForwardFilled';

export interface ForwardFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ForwardFilled: ForwardFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={ForwardFilledSvg} />;

ForwardFilled.displayName = 'ForwardFilled';

export default ForwardFilled;