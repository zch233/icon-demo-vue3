// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import MinusCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/MinusCircleTwoTone';

export interface MinusCircleTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const MinusCircleTwoTone: MinusCircleTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={MinusCircleTwoToneSvg} />;

MinusCircleTwoTone.displayName = 'MinusCircleTwoTone';

export default FunctionalComponent;