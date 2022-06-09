// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import Html5TwoToneSvg from '@ant-design/icons-svg/lib/asn/Html5TwoTone';

export interface Html5TwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const Html5TwoTone: Html5TwoToneIconType = (props, context) => <Icon name='Html5TwoTone' {...{ ...props, ...context.attrs }} icon={Html5TwoToneSvg} />;

Html5TwoTone.displayName = 'Html5TwoTone';

export default Html5TwoTone;