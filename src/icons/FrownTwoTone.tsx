// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FrownTwoToneSvg from '@ant-design/icons-svg/lib/asn/FrownTwoTone';

export interface FrownTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FrownTwoTone: FrownTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={FrownTwoToneSvg} />;

FrownTwoTone.displayName = 'FrownTwoTone';

export default FunctionalComponent;