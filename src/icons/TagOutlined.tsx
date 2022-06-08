// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import TagOutlinedSvg from '@ant-design/icons-svg/lib/asn/TagOutlined';

export interface TagOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const TagOutlined: TagOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={TagOutlinedSvg} />;

TagOutlined.displayName = 'TagOutlined';

export default FunctionalComponent;