// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import MinusSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/MinusSquareTwoTone';

export interface MinusSquareTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const MinusSquareTwoTone: MinusSquareTwoToneIconType = (props, context) => <Icon name='MinusSquareTwoTone' {...{ ...props, ...context.attrs }} icon={MinusSquareTwoToneSvg} />;

MinusSquareTwoTone.displayName = 'MinusSquareTwoTone';

export default MinusSquareTwoTone;