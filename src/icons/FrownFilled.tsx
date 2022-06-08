// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FrownFilledSvg from '@ant-design/icons-svg/lib/asn/FrownFilled';

export interface FrownFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FrownFilled: FrownFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={FrownFilledSvg} />;

FrownFilled.displayName = 'FrownFilled';

export default FrownFilled;