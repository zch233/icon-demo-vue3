// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import SortDescendingOutlinedSvg from '@ant-design/icons-svg/lib/asn/SortDescendingOutlined';

export interface SortDescendingOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const SortDescendingOutlined: SortDescendingOutlinedIconType = (props, context) => <Icon name='SortDescendingOutlined' {...{ ...props, ...context.attrs }} icon={SortDescendingOutlinedSvg} />;

SortDescendingOutlined.displayName = 'SortDescendingOutlined';

export default SortDescendingOutlined;