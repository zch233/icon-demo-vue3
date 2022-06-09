// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TagTwoToneSvg from '@ant-design/icons-svg/es/asn/TagTwoTone';

export interface TagTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconTagTwoTone: TagTwoToneIconType = (props, context) => (
    <Icon name='TagTwoTone' {...{ ...props, ...context.attrs }} icon={TagTwoToneSvg} />
);

IconTagTwoTone.displayName = 'IconTagTwoTone';

export default IconTagTwoTone;