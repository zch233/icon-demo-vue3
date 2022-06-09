// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import RestTwoToneSvg from '@ant-design/icons-svg/lib/asn/RestTwoTone';

export interface RestTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const RestTwoTone: RestTwoToneIconType = (props, context) => <Icon name='RestTwoTone' {...{ ...props, ...context.attrs }} icon={RestTwoToneSvg} />;

RestTwoTone.displayName = 'RestTwoTone';

export default RestTwoTone;