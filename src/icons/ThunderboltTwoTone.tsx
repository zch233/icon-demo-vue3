// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ThunderboltTwoToneSvg from '@ant-design/icons-svg/lib/asn/ThunderboltTwoTone';

export interface ThunderboltTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ThunderboltTwoTone: ThunderboltTwoToneIconType = (props, context) => <Icon name='ThunderboltTwoTone' {...{ ...props, ...context.attrs }} icon={ThunderboltTwoToneSvg} />;

ThunderboltTwoTone.displayName = 'ThunderboltTwoTone';

export default ThunderboltTwoTone;