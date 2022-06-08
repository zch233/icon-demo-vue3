// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ReadFilledSvg from '@ant-design/icons-svg/lib/asn/ReadFilled';

export interface ReadFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ReadFilled: ReadFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={ReadFilledSvg} />;

ReadFilled.displayName = 'ReadFilled';

export default ReadFilled;